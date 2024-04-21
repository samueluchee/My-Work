

export default function Posts({posts, loading}){
    if (loading) {
        return <h2>Repositories are Loading......</h2>
    }

    return <ul>
        {posts.map(post =>(
            <li key={post.id}>{post.name}</li>
        ))}
    </ul>

}