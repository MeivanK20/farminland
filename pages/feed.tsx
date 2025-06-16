import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { sendNotification } from "../lib/notifications";

export default function FeedPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
    });

    const unsubscribePosts = onSnapshot(collection(db, "posts"), (snapshot) => {
      const p = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(p);
    });

    return () => {
      unsubscribeAuth();
      unsubscribePosts();
    };
  }, []);

  const handlePost = async () => {
    if (!newPost.trim()) return;
    await addDoc(collection(db, "posts"), {
      content: newPost,
      author: user.displayName,
      authorId: user.uid,
      timestamp: serverTimestamp(),
    });
    setNewPost("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Fil d’actualité</h2>
      <textarea
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Exprimez-vous..."
        style={{ width: "100%", height: 80 }}
      />
      <button onClick={handlePost}>Publier</button>
      <hr />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} currentUser={user} />
      ))}
    </div>
  );
}

function PostCard({ post, currentUser }: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [likes, setLikes] = useState<number>(0);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!post?.id) return;

    const unsubscribeComments = onSnapshot(
      collection(db, "posts", post.id, "comments"),
      (snap) => {
        setComments(snap.docs.map((doc) => doc.data()));
      }
    );

    const unsubscribeLikes = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snap) => {
        setLikes(snap.docs.length);
      }
    );

    return () => {
      unsubscribeComments();
      unsubscribeLikes();
    };
  }, [post]);

  const handleComment = async () => {
    if (!newComment.trim()) return;
    await addDoc(collection(db, "posts", post.id, "comments"), {
      content: newComment,
      author: currentUser.displayName,
      authorId: currentUser.uid,
      timestamp: serverTimestamp(),
    });
    setNewComment("");
    if (post?.authorId !== currentUser?.uid) {
      await sendNotification(
        post.authorId,
        currentUser.uid,
        "a commenté votre publication."
      );
    }
  };

  const handleLike = async () => {
    await addDoc(collection(db, "posts", post.id, "likes"), {
      userId: currentUser.uid,
    });
    if (post?.authorId !== currentUser?.uid) {
      await sendNotification(
        post.authorId,
        currentUser.uid,
        "a aimé votre publication."
      );
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", marginTop: 20, padding: 10 }}>
      <p><b>{post.author}</b> : {post.content}</p>
      <p>❤️ {likes} J’aime</p>
      <button onClick={handleLike}>J’aime</button>
      <div style={{ marginTop: 10 }}>
        <h4>Commentaires</h4>
        {comments.map((c, i) => (
          <p key={i}><b>{c.author}</b>: {c.content}</p>
        ))}
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire"
        />
        <button onClick={handleComment}>Commenter</button>
      </div>
    </div>
  );
}
