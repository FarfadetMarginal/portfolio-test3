import Footer from '../components/Footer.tsx'
import S1 from '../components/s1.tsx'
import S2 from '../components/s2.tsx'
import S3 from '../components/s3.tsx'
import S4 from '../components/s4.tsx'
import S5 from '../components/s5.tsx'
import S6 from '../components/s6.tsx'
import '../styles/home.scss'
import Cursor from '../components/Cursor.tsx'
import Truc from '../components/Truc.tsx'

const Home = () => {
    return (
        <>
        <Cursor />
        <Truc />
        <header>
            <h1>Baptiste et son Portfolio...</h1>
        
        </header>

        <main>
            <section id="s1">
                <S1/><S2/><S3/>
            </section>
            <section id="s2">
                <S4/><S5/><S6/>
            </section>
            <section id="s3">

            </section>
        </main>
        <Footer/>
        </>
    )
};

export default Home;