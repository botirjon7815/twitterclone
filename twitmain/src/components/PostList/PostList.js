
import PostListItem from "../PostListItem"
import "./PostList.css"

const PostList = ({posts,onDelete, onToggleLiked, onToggleImportant }) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps} 
                onDelete={() => onDelete(id)} 
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}

                />
            </li>
        )
    })

    return(
    <div className="app-list list-group">
        {elements}
    </div>
    )

}

export default PostList


// app.js dan massiv larni olishni shunday usuli ham bor 
// lekin eski usul  <PostListItem label={posts[0].label} important={posts[0].important} />
