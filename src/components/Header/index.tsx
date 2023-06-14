import { useSelector } from 'react-redux'

import * as S from './styles'

import { RootState } from '../../store'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)
  const numeroCarrinho = itensCarrinho.length
  const numeroFavoritos = useSelector(
    (state: RootState) => state.favoritos.itens.length
  )

  const valorTotal = itensCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{numeroFavoritos} favoritos</span>
        <img src={cesta} />
        <span>
          {numeroCarrinho} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
