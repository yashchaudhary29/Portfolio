// 1. GSAP Plugins Register karna
gsap.registerPlugin(ScrollTrigger);

// 2. Animations (Hero, Subtitle aur Sidebar)
const tl = gsap.timeline();
tl.from("#home h1", { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
  .from("#home p", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.5")


  // Sidebar Animation Fix
tl.to(".social-sidebar a", { 
    x: 0, 
    opacity: 1, 
    duration: 0.8, 
    stagger: 0.1, 
    ease: "back.out(1.7)" 
}, "-=1");

// 3. Project Cards Scroll Animation
gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
        scrollTrigger: { 
            trigger: card, 
            start: "top 85%", 
            toggleActions: "play none none reverse" 
        },
        y: 50, 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out"
    });
});

// 4. Stats Counter Animation
gsap.utils.toArray(".stat-card h3").forEach((stat) => {
    const rawValue = stat.innerText.replace('+', ''); // '+' hatao
    const targetValue = parseInt(rawValue);

    if (!isNaN(targetValue)) { // Agar number hai tabhi animate karo
        stat.innerText = "0"; 
        gsap.to(stat, {
            scrollTrigger: {
                trigger: stat,
                start: "top 90%"
            },
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 },
            onUpdate: function() {
                // Agar aapko '+' wapas chahiye animation ke baad
                if(stat.innerText == targetValue) stat.innerText += "+";
            },
            ease: "power1.inOut"
        });
    }
});

//4.5  for image
tl.from(".home-img", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, "-=1"); // Timeline mein title ke saath hi chalega

// 5. Custom Cursor Glow Effect
document.addEventListener("mousemove", (e) => {
    gsap.to("#home", {
        background: `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #111 0%, #050505 50%)`,
        duration: 2
    });
});


// 6. Contact Form Logic (Merged & Cleaned - No Double Alerts)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Page refresh rokne ke liye
            
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            // Button ko disable karein taaki user baar-baar click na kare
            submitBtn.disabled = true;
            submitBtn.innerText = "Sending...";

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('http://localhost:5000/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert("Message send successfully!");
                    contactForm.reset();
                } else {
                    alert("Server Error:");
                }
            } catch (error) {
                console.error("Fetch Error:", error);
                alert("Server not connect");
            } finally {
                // Button ko wapas normal karein
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }
        });
    }
});


gsap.from(".about-content", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

// certificates
