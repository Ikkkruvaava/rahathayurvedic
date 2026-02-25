import Link from 'next/link';

export default function Header() {
    return (
        <header style={{
            padding: '20px 24px',
            background: 'rgba(253, 251, 247, 0.8)',
            backdropFilter: 'blur(10px)',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid rgba(45, 90, 39, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    letterSpacing: '-0.5px'
                }}>
                    Rahath <span style={{ color: 'var(--foreground)', fontWeight: '400' }}>Ayurvedic</span>
                </Link>
                <nav style={{ display: 'none' }}> {/* Hidden for mobile-first landing, could add simple menu if needed */}
                </nav>
                <a href="tel:+919605424292" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                    Call Now
                </a>
            </div>
        </header>
    );
}
