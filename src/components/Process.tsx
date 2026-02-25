export default function Process() {
    const steps = [
        {
            title: "Natural Drying",
            image: "/images/process-drying2.webp",
            description: "Drying in clean, well-ventilated spaces under natural light."
        },
        {
            title: "Cutting Herbs",
            image: "/images/process-cutting1.webp",
            description: "Carefully selecting and cutting fresh herbs to retain potency."
        },
        {
            title: "Fine Grinding",
            image: "/images/process-grinding1.webp",
            description: "Traditional grinding methods to maintain herbal integrity."
        },
        {
            title: "Clean Storage",
            image: "/images/process-storage2.webp",
            description: "Hygienic storage in glass containers to ensure freshness."
        }
    ];

    return (
        <section id="process" style={{ background: 'var(--white)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '60px',
                    flexWrap: 'wrap',
                    gap: '24px'
                }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Preparation Process</h2>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Quality & hygiene priority with traditional methods. We ensure every gram of medicine is prepared with utmost care.
                        </p>
                    </div>
                    <div style={{
                        background: 'var(--accent)',
                        padding: '12px 24px',
                        borderRadius: 'var(--radius-full)',
                        color: 'var(--primary)',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>
                        100% Traditional Methods
                    </div>
                </div>

                <div className="grid grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <div style={{
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                aspectRatio: '3/4',
                                marginBottom: '20px',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <img src={step.image} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                width: '32px',
                                height: '32px',
                                background: 'var(--white)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                fontSize: '0.9rem',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                {index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
