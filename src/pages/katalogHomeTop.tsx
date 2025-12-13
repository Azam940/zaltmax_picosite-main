import { KatalogMap } from '@/components/katalogMap'
import { KatalogFirtsPage } from '../components/katalogFirtsPage'
import Bestsellers from '@/components/KatalogBestsellers'
import KatalogSkidka from '@/components/katalogSkidka'
import KatalogNew from '@/components/katalogNew'
import KatalogArticles from '@/components/katalogArticles'

const KatalogHomeTop = () => {
  return (
    <div>
      <KatalogFirtsPage/>
      <KatalogMap/>
      <Bestsellers/>
      <KatalogSkidka/>
      <KatalogNew/>
      <KatalogArticles/>
    </div>
  )
}

export default KatalogHomeTop