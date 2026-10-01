const Gender=()=>{
    return <>
    <label htmlFor="form-label" className='mb-3'>Gender:</label>
<div class="form-check">
  
  <input class="form-check-input" type="radio" name="gender" id="male" value="option1" />
  <label class="form-check-label" for="male">
   Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="female" value="option2"/>
  <label class="form-check-label" for="female">
  Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="other" value="option3"/>
  <label class="form-check-label" for="other">
 Other
  </label>
</div>

    </>
}

export default Gender