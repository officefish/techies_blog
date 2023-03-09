import mocks from '../assets/mocks'
import PostMasonry from '../components/common/post/post-masonry.jsx'

const Home = () => {

    return (
        <PostMasonry posts={mocks.trending} columns={3}/>
    )
}

export default Home