import { useState } from "react";
function App() {
  const [name, setName] = useState('http://tryhackme.com/jr/workshopiyrf  ');
  const [phrase,setPhrase]=useState("")
  function handleClick(phrase) {
    if (phrase === "CSC3000{r4r_4rch1ve5_th15_t1m3}") {
      setName('http://tryhackme.com/jr/c4ptur3th3fl4gz9cvht');
      setPhrase("good job")
    } else if (phrase === "CSC3000{e4sy_p3asY}") {
      setName("http://tryhackme.com/jr/steganography7w6d4e");
      setPhrase("good job")
    } else if (phrase === "CSC3000{Hex_Hex_Hex}") {
      setName("http://tryhackme.com/jr/finalchallengedc");
      setPhrase("you win")

     }
  }
function  updatePhrase(event){
  setPhrase(event.target.value)

}
  return (
    <div class="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg class="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to the CTF Competion</h2>

        <p class="mt-2 text-lg leading-8 text-gray-600">Enter to the folowing link</p>
        <a class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" href={name}>{name}</a>
        <p class="mt-2 text-lg leading-8 text-gray-600">When you solve it put the flag in the input box to get the next link</p>

      </div>
        <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Flag</label>
            <div class="mt-2.5">
              <input type="text" name="company" id="company" value={phrase} onChange={updatePhrase} class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </input>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button onClick={handleClick(phrase)} class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
        </div>
    </div>
  );
}

export default App;
