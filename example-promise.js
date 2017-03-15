// function getTemplCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTemplCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Smederevo').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challange Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('you need enter numbers!');
    }
  });
}

addPromise(5, 10).then(function (sum) {
  console.log('Promise success:', sum);
}, function (err) {
  console.log('promise error', err);
});

addPromise('ssss', 10).then(function (sum) {
  console.log('Promise success:', sum);
}, function (err) {
  console.log('promise error', err);
});
