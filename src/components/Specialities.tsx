export default function Specialities() {
    const specs = [
        {
            title: "Raw Herbal Medicines",
            subtitle: "Dried, cut & powdered herbs",
            image: "/images/speciality-herbal1.webp",
            description: "Authentic single herbs and traditional combinations, prepared with no artificial additives.",
            color: "#E8F0E6"
        },
        {
            title: "Piles Care Support",
            subtitle: "Traditional Herbal Support",
            image: "/images/speciality-piles1.webp",
            description: "Ayurvedic support formulations designed for natural relief through traditional wisdom. (No cure claims)",
            color: "#F0EBE6"
        },
        {
            title: "Postnatal Care",
            subtitle: "Post-delivery herbal preparations",
            image: "/images/speciality-prasava1.webp",
            description: "Carefully curated herbal sets for post-delivery wellness, following traditional Kerala practices.",
            color: "#E6EDF0"
        }
    ];

    return (
        <section id="specialities" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Specialities</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We specialize in traditional preparations that stay true to their roots.
                    </p>
                </div>
                <div className="grid grid-cols-3">
                    {specs.map((spec, index) => (
                        <div key={index} style={{
                            background: spec.color,
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'var(--transition)',
                            cursor: 'default',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                <img src={spec.image} alt={spec.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '32px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary-dark)' }}>{spec.title}</h3>
                                <p style={{ fontWeight: '500', color: 'var(--primary)', marginBottom: '24px', fontSize: '0.9rem', textTransform: 'uppercase' }}>{spec.subtitle}</p>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>{spec.description}</p>
                                <a href="#enquiry" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Enquire Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
