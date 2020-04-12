export default () => ({
  root: {
    margin:'20px',
    height:'200px'
  },
  tray: {
    display: 'flex'
  },
  item: {
    alignItems:'middle',
    flexGrow: '1'
  },
  record: {
    // width: "300px",
    flex: 'flex-grow',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '120px',
    height: '120px',
    margin:'-60px 0 0 -60px',
    '-webkit-animation':'spin 4s linear infinite',
    '-moz-animation':'spin 4s linear infinite',
    'animation':'spin 4s linear infinite',
  }
  
})
