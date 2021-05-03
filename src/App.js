import Utils from './utils'

function App() {

  const arrayOfLits = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92] ;

  return (
    <div style={{margin: '20rem'}}>
        <h2>Open  the browser  console log to see  result</h2>
        {console.log('****Bubble Sort ***',Utils.bubbleSort(arrayOfLits))}
        {console.log('****Selecton Sort ***',Utils.selectionSort(arrayOfLits))}
        {console.log('****Insertion Sort ***',Utils.insertionSort (arrayOfLits))}
        {console.log('****Quick Sort ***',Utils.quickSort (arrayOfLits))}
        {console.log('****Merge Sort ***',Utils.mergeSort (arrayOfLits))}
    </div>
  );
}

export default App;
