
import "./Appheader.css"

const AppHeader = ({AllPosts, Liked}) => {
    return(
    <div className="app-header d-flex">
        <h1>Botirjon bb</h1>
        <h2>{AllPosts} posts, likes {Liked}</h2>
    </div>
    )
}

export default AppHeader