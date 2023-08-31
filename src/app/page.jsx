import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import Payment from '@/components/home/Payment'

export default function Home() {
  return (
    <div className='home'>
      <header className="header container mt-lg-4">
        <Header></Header>
      </header>

      <main className="content">
        <div className="layout-css">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-flex">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-grid">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-bootstrap">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <Payment></Payment>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
