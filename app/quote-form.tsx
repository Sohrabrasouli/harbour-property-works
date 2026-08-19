"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }
  if (prepared) {
    return (
      <div className="quote-ready" role="status">
        <span className="ready-mark">✓</span>
        <p className="eyebrow">Request prepared</p>
        <h3>Thank you. The details are ready for Harbour.</h3>
        <p>This preview does not transmit personal information yet. The company inbox or phone channel must be connected before public launch.</p>
        <button type="button" onClick={() => setPrepared(false)}>Edit my request</button>
      </div>
    );
  }
  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
      </div>
      <div className="field-row">
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
      </div>
      <div className="field-row">
        <label>Property type<select name="propertyType" required defaultValue=""><option value="" disabled>Select one</option><option>House</option><option>Condominium</option><option>Rental property</option><option>Commercial property</option><option>Other</option></select></label>
        <label>Main service<select name="service" required defaultValue=""><option value="" disabled>Select one</option><option>Interior painting</option><option>Exterior painting</option><option>Cabinets & refinishing</option><option>Drywall, walls & ceilings</option><option>Carpentry & repairs</option><option>Commercial painting</option><option>Multiple services</option></select></label>
      </div>
      <div className="field-row">
        <label>Postal code<input name="postalCode" autoComplete="postal-code" placeholder="M5V 2T6" required /></label>
        <label>Preferred timing<select name="timing" required defaultValue=""><option value="" disabled>Select one</option><option>As soon as possible</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Planning ahead</option></select></label>
      </div>
      <label>What would you like done?<textarea name="details" rows={5} placeholder="Rooms, surfaces, repairs, access notes or anything else that will help us understand the work." required /></label>
      <label className="consent"><input type="checkbox" required /><span>I agree that Harbour may use these details to respond to my estimate request.</span></label>
      <button className="button form-submit" type="submit">Prepare my estimate request <span aria-hidden="true">→</span></button>
      <p className="form-note">Preview mode: this form currently keeps information on your device and does not send it.</p>
    </form>
  );
}
