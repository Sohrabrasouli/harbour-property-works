"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle, ImageSquare, LockKey, UploadSimple } from "@phosphor-icons/react";

const serviceOptions = ["Painting", "Surface repair", "Refinishing", "Exterior care", "Multiple services"];
const propertyOptions = ["House", "Condo", "Rental property", "Small commercial space", "Other"];

export function ProjectPlanner() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [property, setProperty] = useState("");
  const [area, setArea] = useState("");
  const [timing, setTiming] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const canContinue = useMemo(() => step === 1 ? Boolean(service && property) : step === 2 ? Boolean(area && timing) : true, [area, property, service, step, timing]);

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  if (sent) return (
    <div className="planner-success" role="status">
      <CheckCircle size={38} weight="fill" aria-hidden="true" />
      <p className="kicker">Project brief prepared</p><h3>Your request is ready.</h3>
      <p>This preview does not transmit details yet. A verified Harbour email or phone channel will be connected before launch.</p>
      <button type="button" onClick={() => setSent(false)}>Review my details</button>
    </div>
  );

  return (
    <form className="project-planner" onSubmit={submit} id="planner">
      <div className="planner-heading">
        <div><p className="kicker">Plan your project</p><h2>A few details. One clear next step.</h2></div>
        <div className="step-count" aria-label={`Step ${step} of 3`}>{[1, 2, 3].map((item) => <span className={item <= step ? "active" : ""} key={item}>{item < step ? <Check size={12} weight="bold" /> : item}</span>)}</div>
      </div>

      {step === 1 && <div className="planner-panel">
        <fieldset><legend>What needs attention?</legend><div className="choice-grid">{serviceOptions.map((option) => <label key={option} className={service === option ? "selected" : ""}><input type="radio" name="service" value={option} checked={service === option} onChange={() => setService(option)} /><span>{option}</span></label>)}</div></fieldset>
        <label className="select-field">Property type<select value={property} onChange={(event) => setProperty(event.target.value)} required><option value="" disabled>Select property</option>{propertyOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>}

      {step === 2 && <div className="planner-panel planner-two-column">
        <div className="field-stack"><label className="select-field">Toronto / GTA area<input value={area} onChange={(event) => setArea(event.target.value)} placeholder="Neighbourhood or postal code" required /></label><label className="select-field">Preferred timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as practical</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Planning ahead</option></select></label></div>
        <div className="upload-zone" onClick={() => fileInput.current?.click()} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") fileInput.current?.click(); }}><input ref={fileInput} type="file" accept="image/*" multiple hidden onChange={(event) => setFiles(Array.from(event.target.files ?? []).slice(0, 5))} />{files.length ? <ImageSquare size={28} weight="duotone" /> : <UploadSimple size={28} />}<strong>{files.length ? `${files.length} photo${files.length > 1 ? "s" : ""} selected` : "Add project photos"}</strong><span>Optional · up to 5 images</span></div>
      </div>}

      {step === 3 && <div className="planner-panel contact-panel"><div className="field-stack"><label className="select-field">Name<input name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required /></label><label className="select-field">Email or phone<input name="contact" value={contact} onChange={(event) => setContact(event.target.value)} required /></label></div><label className="select-field details-field">Anything we should know?<textarea name="details" rows={4} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Rooms, surfaces, access, repairs or priorities." /></label><label className="planner-consent"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required /><span>Harbour may use these details only to respond to this request.</span></label></div>}

      <div className="planner-footer"><div className="planner-security"><LockKey size={15} weight="duotone" /><span>Preview only — request delivery is not connected.</span></div><div className="planner-actions">{step > 1 && <button className="back-button" type="button" onClick={() => setStep(step - 1)}><ArrowLeft size={16} />Back</button>}{step < 3 ? <button className="primary-button" type="button" disabled={!canContinue} onClick={() => setStep(step + 1)}>Continue<ArrowRight size={17} weight="bold" /></button> : <button className="primary-button" type="submit">Prepare request<ArrowRight size={17} weight="bold" /></button>}</div></div>
    </form>
  );
}
