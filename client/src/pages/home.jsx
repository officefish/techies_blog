import mocks from '../assets/mocks'
import PostMasonry from '../components/common/post/post-masonry.jsx'

const Home = () => {

    return ( 
        <section className="w-full flex items-center justify-center">
             <PostMasonry posts={mocks.trending} columns={3}/>
        </section>
    )
}

export default Home