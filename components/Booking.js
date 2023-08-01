import React from 'react'

const Booking = () => {
  return (
    <section class="booking-section">
        <div class="booking-box">
            <div class="topic-text">Book your free trial session</div>
                
                <form>
                    <div class="input-box">
                        <select name="studentparent" id="studentparent" class="w-100" required>
                            <option value="I am a student"> I am a student</option>
                            <option value="I am a parent">I am a parent</option>
                        </select>
                    </div>

                    <div class="input-box">
                        <input type="text" name="name" placeholder="Name" required />
                    </div>

                    <div class="input-box">
                        <input type="text" name="school" placeholder="School" required />
                    </div>

                    <div class="input-box">
                        <select name="grade" id="grade" required>
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

                    <div class="button">
                        <input type="submit" name="submit" value="Book Now" />
                    </div>
                </form>
        </div>
    </section>

  )
}

export default Booking