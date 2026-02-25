'use client';

import { useState } from 'react';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        concern: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp redirect logic
        const waText = `Hello Rahath Ayurvedic, I have an enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Concern: ${formData.concern}
Message: ${formData.message}`;

        const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(waText)}`;
        window.open(waUrl, '_blank');

        // reset form or show success
        alert('Thank you! Redirecting to WhatsApp for confirmation.');
    };

    return (
        <section id="enquiry" style={{ background: 'var(--white)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="card form-card" style={{ padding: '60px' }}>
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Enquire Now</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Fill out the form below and we will get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                        <div className="enquiry-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Rahul"
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1rem',
                                        background: '#F8FAFC'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="e.g. +91 98765 43210"
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1rem',
                                        background: '#F8FAFC'
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Health Concern</label>
                            <select
                                name="concern"
                                required
                                value={formData.concern}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '14px 20px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #E2E8F0',
                                    fontSize: '1rem',
                                    background: '#F8FAFC',
                                    appearance: 'none'
                                }}
                            >
                                <option value="">Select a concern</option>
                                <option value="Raw Herbal Medicine">Raw Herbal Medicine</option>
                                <option value="Piles Care Support">Piles Care Support</option>
                                <option value="Postnatal Care">Postnatal Care</option>
                                <option value="Other Consultation">Other Consultation</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                style={{
                                    width: '100%',
                                    padding: '14px 20px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #E2E8F0',
                                    fontSize: '1rem',
                                    background: '#F8FAFC',
                                    resize: 'vertical'
                                }}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ height: '56px', fontSize: '1.1rem' }}>
                            Send Enquiry via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
