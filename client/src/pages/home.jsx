import trending from '../assets/mocks/trending'
import PostMasonry from '../combonents/common/post-masonry'

const Home = () => {
    return ( 
        <section className="container home">
            <div className="row">
                <h2>Home</h2>
                {/*<PostMasonry post={trending} columns={3}/>*/}
            </div>
        </section>
    )
}

export default Home