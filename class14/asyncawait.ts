//ASYNC _ AWAIT

// function data (){
//     return new Promise((resolve, reject) => {
//         reject("Rejected")
//     })
// }


// async function fetchData() {
//     try{
//         const userdata = await data()
//         console.log(userdata );
//     }catch (error){
//         console.log(error);
        
//     }
   
// }

// fetchData()


// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({ data: "raw data" });
//       }, 1000);
//     });
//   }

//   function processData(data: any) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(processed ${data.data});
//       }, 1000);
//     });
//   }

//   new Promise((resolve, reject)=>)
//   function saveData(data: any) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(saved ${data});
//       }, 1000);
//     });
//   }

//   fetchData()
//     .then((data) => {
//       return processData(data);
//     })
//     .then((processedData) => {
//       return saveData(processedData);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

//   async function handleData() {
//     try {
//       const data = await fetchData();
//       const processedData = await processData(data);
//       const result = await saveData(processedData);
//       console.log(result);
//       console.error("Error:", error);
//     }
//   }    } catch (error) {


//   handleData();