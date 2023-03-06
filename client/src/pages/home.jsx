import mocks from '../assets/mocks'
import PostMasonry from '../components/common/post/post-masonry.jsx'

const Home = () => {

    return ( 
        <section className="z-40 w-full flex items-center justify-center shadow-gray-900 shadow-t-xl">
            <div className="row">
                <h2>Home</h2>
                <PostMasonry posts={mocks.trending} columns={3}/>
            </div>
        </section>
    )
}

export default Home