import Produto from '../components/Produto'
import { ProdutoType } from '../App'
import { useGetProdutosQuery } from '../services/api'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

import * as S from './styles'

const Produtos = () => {
  const listaFavoritos = useSelector(
    (state: RootState) => state.favoritos.itens
  )

  const { data: produtos, isLoading, isSuccess } = useGetProdutosQuery()
  if (isLoading) return <S.loading>Carregando...</S.loading>

  if (!isSuccess)
    return (
      <S.error>
        Sinto muito, não foi possível carregar os itens da página.
      </S.error>
    )
  else {
    const produtoEstaNosFavoritos = (produto: ProdutoType) => {
      const produtoId = produto.id
      const IdsDosFavoritos = listaFavoritos.map((f) => f.id)
      return IdsDosFavoritos.includes(produtoId)
    }

    return (
      <>
        <S.Produtos>
          {produtos?.map((produto) => (
            <Produto
              estaNosFavoritos={produtoEstaNosFavoritos(produto)}
              key={produto.id}
              produto={produto}
            />
          ))}
        </S.Produtos>
      </>
    )
  }
}

export default Produtos
