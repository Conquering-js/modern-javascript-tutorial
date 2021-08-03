const cc = () => {
    function a() {
        console.log('a');
    }

    // a();
};

cc();
// a(); // error! 'a' is not defined! 

// new function 
const globalSide = 'globalSide';

function outside () {
    const outsideWord = 'outsideWord';

    return new Function(globalSide,'b', 'console.log(globalSide)');  
}

outside()();

// 간결한 코드작성법
const callArray = {
    'a': () => console.log('1'),
    'b': () => console.log('2'),
    'c': () => console.log('3'),
}

switch(x) {
    case 'a':
      console.log('1');
      break;
  
    case 'b': 
      console.log('2');
      break;

      case 'c': 
      console.log('3');
      break;
  
    default:
        console.log('d');
    break;
}
