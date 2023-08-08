import React from 'react'







const Booking = () => {
  return (
    <section class="w-full flex items-center justify-center p-14">
        <div class=" w-[500px] bg-myblue rounded-lg py-5 px-10 shadow-booking flex-col justify-center items-center">
            <div class="text-white text-left font-semibold text-lg justify-center">Book your free trial session</div>
                
                <form>
                    <div class=" h-12 my-3 w-full">
                        <select name="studentparent" id="studentparent" className="w-full rounded-lg  h-full border-none outline-none text-base bg-white px-4 resize-none text-gray-400" required>
                            <option value="I am a student"> I am a student</option>
                            <option value="I am a parent">I am a parent</option>
                        </select>
                    </div>

                    <div class="h-12 my-3 w-full">
                        <input type="text" className="w-full rounded-lg  h-full border-none outline-none text-base bg-white px-4 resize-none text-gray-400" name="name" placeholder="Name" required />
                    </div>

                    <div class="h-12 my-3 w-full">
                        <input type="text" className="w-full rounded-lg  h-full border-none outline-none text-base bg-white px-4 resize-none text-gray-400" name="school" placeholder="School" required />
                    </div>

                    <div class="h-12 my-3 w-full">
                        <select name="grade" className="w-full rounded-lg  h-full border-none outline-none text-base bg-white px-4 resize-none text-gray-400" id="grade" required>
                            <option value="Class">Class</option>
                            <option value="EB7">EB7</option>
                            <option value="EB8">EB8</option>
                            <option value="EB9">EB9</option>
                            <option value="S1">S1</option>
                            <option value="S2S">S2S</option>
                            <option value="S2H">S2H</option>
                            <option value="SG">SG</option>
                            <option value="SV">SV</option>
                            <option value="SE">SE</option>
                            <option value="LH">LH</option>
                        </select>
                    </div>

                    <div class="text-myblue bg-white mt-2 inline-block font-semibold rounded-md b cursor-pointer py-2 px-4 justify-center">
                        <input type="submit" name="submit" value="Book Now" />
                    </div>
                </form>
        </div>
    </section>

  )
}

export default Booking