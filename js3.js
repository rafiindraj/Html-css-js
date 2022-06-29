// Expected Result : 4200
// Direction :
// Find and returns the largest value

const item = [
    {
      name: 'spoon',
      details: {
        value: 4120,
      },
    },
    {
      name: 'fork',
      details: {
        value: 4200,
      },
    },
    {
      name: 'plate',
      details: {
        value: 2032,
      },
    },
  ];
  var values = []
  
  function result(item) {
    // Your Code Here
    for(let i=0;i<item.length;i++){
        values.push(item[i].details.value)
    }

    return Math.max(...values)
  }
  
  console.log(result(item));