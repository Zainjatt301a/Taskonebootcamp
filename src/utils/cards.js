
export default function Cards() {

  return (


    <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
      <div style={{ backgroundImage: `url("https://brandslogos.com/wp-content/uploads/images/large/grab-logo.png")` }}
        class="bg-blue-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center "></div>

      <div class="w-72 md: w-72  bg-white -mt-20 shadow-lg rounded-lg overflow-hidden ">

        {/* <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div> */}
        <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>



          </div>
          <div class="flex flex-col items-center pb-10">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png" alt="Bonnie image" />
            <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
            <span class="text-sm text-gray-500 dark:text-gray-400 border-b-4 border-blue-600	">Visual Designer</span>

            <div class="flex mt-4 space-x-3 lg:mt-6">
              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">Message</a>
            </div>
          </div>
        </div>















        {/* working code below */}
        {/* <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
      <h1 class="text-gray-800 font-bold ">$129</h1>
      <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
    </div> */}
      </div>
    </div>
  )
}
