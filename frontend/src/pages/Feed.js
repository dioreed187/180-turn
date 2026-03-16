import React, { useState, useEffect } from 'react';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        // Load posts from local storage
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const handlePostChange = (event) => {
        setNewPost(event.target.value);
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        if (newPost.trim() === '') return;

        const updatedPosts = [...posts, { content: newPost, likes: 0, comments: [] }];
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setNewPost('');
    };

    const handleLike = (index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].likes += 1;
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    const handleComment = (index, comment) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(comment);
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    return (
        <div>
            <h1>Social Feed</h1>
            <form onSubmit={handlePostSubmit}>
                <input
                    type="text"
                    value={newPost}
                    onChange={handlePostChange}
                    placeholder="What's on your mind?"
                />
                <button type="submit">Post</button>
            </form>
            <div>
                {posts.map((post, index) => (
                    <div key={index} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
                        <p>{post.content}</p>
                        <button onClick={() => handleLike(index)}>👍 {post.likes} Likes</button>
                        <div>
                            <input
                                type="text"
                                placeholder="Add a comment"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        handleComment(index, event.target.value);
                                        event.target.value = '';
                                    }
                                }}
                            />
                            <div>
                                {post.comments.map((comment, commentIndex) => (
                                    <p key={commentIndex} style={{ marginLeft: '20px' }}>
                                        {comment}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;