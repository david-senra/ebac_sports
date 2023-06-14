import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoType } from '../../App'

type FavoritosState = {
  itens: ProdutoType[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload

      if (state.itens.find((product) => product.id === produto.id)) {
        const posicaoDeletar = state.itens.indexOf(produto)
        state.itens.splice(posicaoDeletar, 1)
        console.log('deletando' + state.itens.length)
      } else {
        state.itens.push(produto)
        console.log('inserindo' + state.itens.length)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
