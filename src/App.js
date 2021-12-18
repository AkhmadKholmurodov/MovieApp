import React from 'react';


//reactni ichidan component yana bir element olyotganimiz uchun react import qilamiz
class App extends React.Component {
  constructor(props) {
    super() ;
    this.state = {
      favouruteColor: 'crimson'
    }
  }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favouruteColor: 'yellow'})
      }, 3000);
    }
     componentDidUpdate() {
       console.log('companentHasUpdated');
       document.querySelector('p').innerHTML = "The updateen color is " + this.state.favouruteColor;
      }

     

       render() {
         return(
          <div className="App">
          <p>"My favourite color is{this.state.favouruteColor}"</p>
          </div>
         );
       }


}




export default App;




             ///
           // //
         //   //
              //
              //
              //
         ////////////

// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       data: "Akhmad Kholmurodov"
//     }
  
//   }

//   getData() {
//     setTimeout(() => {
//       console.log("Our data has changed");
//       setTimeout(() => {
//         this.setState({data: "Please Write Your Father name"})
//       }, 2000);
//     }, 3000);
//   }

//   componentDidMount() {
//     this.getData();
//   }
//   render() {
    
//     return (
//       <div className = "App">
//         <h2>{this.state.data}</h2>
//       </div>
//     );
//   }


// }








           ///
        ///   ///
             ///
           ///
         ///
        /////////



// constructor(props) {
//   super(props);
//   this.state= {
//     count: 0,
// };
// }

//   handleClickPlus = () => {
//     this.setState({count: this.state.count + 1});
//   }
//   handleClickMinus = () => {
//     this.setState({count: this.state.count - 1});
//   }
//   resetCount = () => {
//     this.setState({count: this.state.count = 0});
//   }
// //   this.handleClick = this.handleClick.bind(this)
// // }

// // handleClick = () => {
// //   this.setState({count: this.state.count + 1});  //1yol ozgartirsh


//   // this.setState((prev) => ({count: prev.count + 1}), () => {
//   //   console.log("setState has Completed");  //ikkinchin yol ozgartirish
//   // })

//   // console.log("From handle Click");


//   //this.setState((prev) => ({count: prev.count + 1}))
//   //this.setState((prev) => ({count: prev.count + 1}))



// render() {
//   return(
//     <div className = "changeNumberApp">  
//       <h1>hello world</h1>
//       <button onClick = {this.handleClickPlus}>Plus</button> 
     
//       <button onClick = {this.handleClickMinus}>Minus</button>
    
//       <button onClick = {this.resetCount}>Reset</button>
//       <h2>{this.state.count}</h2>
//         {/* uchinchi yol ozgartirish */}
//     </div>

//   );
// }



        ////
           //
        ///
           //
       ////

// super();
//     this.state = {
//       posts: [],
//       loading: true,
//       comment: [],
//     }
  
//   }


  // componentDidMount() {
  //   console.log("componentDidMount");
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => this.setState({posts:data, loading:false}))

  //     this.timerID = setInterval(() => {
  //       fetch('https://jsonplaceholder.typicode.com/comments')
  // .then(response => response.json())
  // .then(data => this.setState({comment :data}))
  //     }, 3000);
  // }


  // componentDidUpdate(){
  //   // this.componentDidUpdate();
  //   console.log("AKhmad Kholmurodov");
  // }

  // render() {
    
  //   return (
  //     <div className = "App">
  //       {this.state.loading ?  
  //       <h3>loading...</h3> : 
  //       <h3>{this.state.posts.length} has loaded and got {this.state.comment.length}comments</h3>
  // }
  //     </div>
  //   );




