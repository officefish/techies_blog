import mocks from '../assets/mocks'
import PostMasonry from '../components/common/post-masonry.jsx'

const Home = () => {

    return ( 
        <section className="container home">
            <div className="row">
                <h2>Home</h2>
                <PostMasonry posts={mocks.trending} columns={3}/>
            </div>
        </section>
    )
}

export default Home