from pathlib import Path

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "media" / "smilebot-resume.pdf"


def bullet(text):
    return Paragraph(f"&bull; {text}", styles["ResumeBullet"])


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="ResumeTitle", parent=styles["Title"], fontSize=18, leading=22, spaceAfter=5))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontSize=9, leading=12, alignment=1, spaceAfter=9))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontSize=12, leading=15, spaceBefore=6, spaceAfter=3))
styles.add(ParagraphStyle(name="Role", parent=styles["Heading3"], fontSize=10, leading=13, spaceBefore=4, spaceAfter=2))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["BodyText"], fontSize=9, leading=12))
styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["BodyText"], fontSize=9, leading=11, leftIndent=10, firstLineIndent=-7))

story = [
    Paragraph('Aaron "Smiley" Cate', styles["ResumeTitle"]),
    Paragraph("smilebot3000@gmail.com | 470-553-3856 | US ( East ) / Mexico / Tour | linktr.ee/Smilebot", styles["Contact"]),
    Paragraph("Introduction", styles["Section"]),
    Paragraph(
        "I am a live music lover with 1000s of shows under my belt, turned live visual artist, turned self-taught audiovisual technician with years of hands-on experience in live event production. My expertise comes from working directly in the field, setting up and operating AV systems at festivals, raves, and concerts. I have honed my skills through real-world applications rather than traditional certifications, making me highly adaptable and efficient in fast-paced environments.",
        styles["BodySmall"],
    ),
    Paragraph("Credentials & Qualifications", styles["Section"]),
    bullet("Years of hands-on experience in AV setup, live visuals, and event production"),
    bullet("Deep knowledge of 2D and 3D digital visuals, projection mapping, and LED wall operation"),
    bullet("Strong background in live visual mixing and VJing for music events"),
    bullet("Proficient with industry-standard AV software and hardware"),
    bullet("Experienced in troubleshooting and problem-solving under live event conditions"),
    bullet("Extensive collaboration with artists, musicians, and event organizers"),
    Paragraph("Work Experience", styles["Section"]),
    Paragraph("Freelance AV Technician / Visual Artist / Stagehand (2018 - Present)", styles["Role"]),
    bullet("Designed and executed live visuals for concerts, festivals, and raves"),
    bullet("Set up and operated LED walls, projectors, and other display technologies"),
    bullet("Managed audio-visual components for multi-stage events"),
    bullet("Coordinated with event organizers and technical teams to ensure seamless execution"),
    bullet("Worked hundreds of shows in various roles, from pushing cases to doing security to running visuals"),
    Paragraph("Smilebot Productions (2012 - Present)", styles["Role"]),
    bullet("Designed logos, merchandise, websites, brands, and visuals for clients across industries"),
    bullet("Video production for events, music videos, parties, and businesses, including smart installs, LED panels, TVs, lighting, audio, and projectors"),
    bullet("3D/VR design and implementation for virtual experiences and events"),
    bullet("Live streamcast producer/technician for large virtual events and concerts"),
    Paragraph("Notable Events & Projects", styles["Section"]),
    bullet("Country Music Awards - Prop Dept, I.A.T.S.E - Assisted in stage setup, prop management, and breakdown"),
    bullet("Imagine Music Festival - Video Production Lead (V1) - Managed video production, content execution, and team leadership"),
    bullet("Believe Music Hall - Visual Director & Video Lead/VJ - Oversaw full video production, upgrades, and crew coordination"),
    Paragraph("Skills & Technical Proficiency", styles["Section"]),
    bullet("Software: Resolume, TouchDesigner, MadMapper, Adobe Suite"),
    bullet("Hardware: LED walls, projectors, media servers, lighting control systems"),
    bullet("Live Production: VJing, video mixing, projection mapping, stage setup, stagehand"),
    bullet("Troubleshooting: Equipment maintenance, system optimization"),
    bullet("Collaboration: DJs, musicians, festival teams, stage crews"),
    Paragraph("References", styles["Section"]),
    bullet("Joey Appleseed (Iris Presents / Imagine Music Festival) - 770.912.6752"),
    bullet('Aireon "Ployd" Grimes (Slow&Low Presents) - 678.480.5784'),
    bullet("Kevin Rodriguez (Aisle5, Georgia Event Specialists) - 470.725.8323"),
    Spacer(1, 0.05 * inch),
]

document = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=letter,
    rightMargin=0.55 * inch,
    leftMargin=0.55 * inch,
    topMargin=0.45 * inch,
    bottomMargin=0.45 * inch,
)
document.build(story)
print(f"Generated {OUTPUT}")
