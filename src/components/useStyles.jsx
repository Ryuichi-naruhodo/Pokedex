import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: 10,
    height: '100%',
  },
  errorPage: {
    flexGrow: 1,
    padding: 10,
    height: '100%',
    backgroundColor: '#424244',
  },
  pagination: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  table: {
    textTransform: 'capitalize',
    marginTop: 40,
  },
  imgPoke: {
    backgroundColor: 'f2f2f26b',
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
  },
  section: {
    textAlign: 'center',
  },
  title: {
    color: 'white',
    borderTop: '4px solid #504e4e',
    borderBottom: '4px solid #504e4e',
    padding: 10,
    fontFamily: 'Flexo',
  },
  cardContainer: {
    textAlign: 'center',
    height: '2OOpx',
    width: '160px',
    margin: theme.spacing(1),
    backgroundColor: '#757e8414!important',
    padding: theme.spacing(1),
    cursor: 'pointer',
  },
  icon: {
    margin: 'auto',
    height: 160,
    width: 160,
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
  },
  descriptionPokemonRight: {
    backgroundColor: '#30A7D6',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
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
  },
  searchBarIcon: {
    paddingBottom: 3,
  },
}));

export default useStyles;
