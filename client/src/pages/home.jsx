import mocks from '../assets/mocks'
import PostMasonry from '../components/common/post/post-masonry.jsx'

const Home = () => {

    return ( 
        <section className="flex items-center justify-center">
            <div className="row">
                <h2>Home</h2>
                <PostMasonry posts={mocks.trending} columns={3}/>
            </div>
        </section>
    )
}

export default Home