import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    height: '100%',
  },
  logo: {
    fontFamily: 'Pokemon!important',
    fontWeight: 200,
    flexGrow: 1,
    cursor: 'pointer',
  },
  rootToolbar: {
    flexGrow: 1,
    backgroundColor: '#b51e1e!important',
    '&.MuiPaper-elevation4': {
      boxShadow: 0,
    },
  },
  errorPage: {
    flexGrow: 1,
    padding: 10,
    height: '100%',
  },
  pagination: {
    paddingTop: 20,
    paddingBottom: 20,
    ' &.MuiPaginationItem-outlinedPrimary': {
      color: 'white',
    },
  },
  table: {
    textTransform: 'capitalize',
    marginTop: 20,
    marginBottom: 30,
  },
  imgPoke: {
    textAlign: 'center',
    minWidth: 200,
    minHeight: 350,
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 10,
  },
  pageDetails: {
    padding: 10,
    height: '100%',
    background: 'linear-gradient(rgba(255,255,255,.95), rgba(255,255,255,.9)), url(https://st2.depositphotos.com/3213441/12022/v/950/depositphotos_120226648-stock-illustration-pokemon-go-pokeball-seamless-texture.jpg)',
    backgroundSize: 'contain',
  },
  containterPoke: {
    marginTop: 50,
    backgroundColor: 'ffffff9e',
  },
  section: {
    textAlign: 'center',
  },
  title: {
    color: 'white',
    padding: 10,
    fontFamily: 'Flexo',
  },
  cardContainer: {
    textAlign: 'center',
    height: '230px',
    width: '180px',
    margin: theme.spacing(1),
    backgroundColor: '#757e8414!important',
    cursor: 'pointer',
    padding: 10,
  },
  icon: {
    margin: 'auto',
    height: 160,
    width: 160,
    marginBottom: 15,
  },
  name: {
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: 'Flexo',
  },
  nameDetails: {
    textTransform: 'capitalize',
    fontFamily: 'Flexo',
  },
  input: {
    marginLeft: 10,
  },
  labelSearchBar: {
    flexGrow: 1,
    width: '30%',
    '& .MuiFormLabel-root': {
      fontSize: 13,
      color: 'white',
      textTransform: 'capitalize',
      fontFamily: 'Flexo',
    },
  },
  button: {
    fontFamily: 'Pokemon!important',
    fontWeight: 100,
  },
  buttonError: {
    fontFamily: 'Pokemon!important',
    fontWeight: 100,
    backgroundColor: 'white',
    margin: 15,
    textDecoration: 'none',
  },
  descriptionDetails: {
    width: '100%',
    fontFamily: 'Flexo',
    fontWeight: 300,
    padding: 4,
    position: 'relative',
  },
  descriptionPokemonLeft: {
    backgroundColor: '#30A7D6',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
  },
  descriptionPokemonRight: {
    backgroundColor: '#30A7D6',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
  },
  Vcaracteristiques: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 40,
    paddingBottom: 5,
    textAlign: 'center',

  },
  stats: {
    color: 'white',
  },
  valueStats: {
    fontSize: 20,
  },
  margin: {
    margin: theme.spacing(1),
    paddingLeft: 25,
    marginBottom: 55,
    marginTop: 40,

  },
  searchBarIcon: {
    marginBottom: 3,
  },
}));

export default useStyles;
