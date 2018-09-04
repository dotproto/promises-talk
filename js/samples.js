/* Code samples with no meaningful side effects - we just need them here as text */
{
  // Declare variables expected by the executor
  let error = reason = value = null;
  // sample(fullPromise)
  const promise = new Promise((resolve, reject) => {
    if (error) {
      reject(reason);
    } else {
      resolve(value);
    }
  });
  // end-sample

  // sample(basicPromise)
  Promise.resolve(value);
  let foo = // skip-sample
  Promise.reject(reason);
  // end-sample

  // Swallow the error
  foo.catch(e => null);
}


// sample(echoPromise)
const echoPromise = (value) =>
  Promise.resolve(value);
// end-sample


thenChain1.addEventListener('click', () => {
  // sample(thenChain1)
  echoPromise('Hello, world!')
    .then((message) => alert(message))
  // end-sample
})

thenChain2.addEventListener('click', () => {
  // sample(thenChain2)
  echoPromise('I am yelling')
    .then((message) => message.toUpperCase())
    .then((message) => message + '!!!')
    .then((message) => alert(message))
  // end-sample
})

thenChain2B.addEventListener('click', () => {
  // sample(thenChain2B)
  const partial = echoPromise('so cool')
    .then((message) => message.toUpperCase())

  partial
    .then((message) => message + '!!!')
    .then((message) => alert(message))
  // end-sample
})

thenChain3.addEventListener('click', () => {
  // sample(thenChain3)
  const upperCase = (value) => value.toUpperCase();
  const exclaim = (value) => value + '!!!';

  echoPromise('Third times the charm')
    .then(upperCase)
    .then(exclaim)
    .then(alert)
  // end-sample
});


runCatchHandler.addEventListener('click', () => {
  // sample(catchHandler)
  Promise.resolve('Happy path')
    .then((value) => {
      if (Math.random() > .5) {
        throw 'Completely unpredictable error!'
      }
      return value;
    })
    .catch((error) => `We recovered!`)
    .then(alert)
  // end-sample
});


// sample(delay)
const delay = (time) =>
  new Promise(resolve =>
    setTimeout(() => resolve(), time));
// end-sample

// sample(awaitAlert)
async function asyncAlert() {
  const rawValue = await delay(2000);
  alert('Done!');
}
// end-sample
runAsyncAlert.addEventListener('click', asyncAlert);

// sample(promiseAlert)
function promiseAlert() {
  return delay(2000)
    .then(rawValue => alert('Done!'))
}
// end-sample
runPromiseAlert.addEventListener('click', promiseAlert);
