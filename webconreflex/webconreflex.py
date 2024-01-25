import reflex as rx
import webconreflex.styles.styles as styles
from webconreflex.components.navbar import navbar
from webconreflex.components.footer import footer
from webconreflex.views.header.header import header
from webconreflex.views.links.links import links
from webconreflex.views.sponsors.sponsors import sponsors
from webconreflex.styles.styles import Size


# class State(rx.State):
#     pass


def index() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                sponsors(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )


app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
        rx.script(src="https://www.googletagmanager.com/gtag/js?id=G-3YGHT3XJFS"),
        rx.script(
            """
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3YGHT3XJFS');
"""
        ),
    ],
)

app.add_page(
    index,
    title="MoureDev | Te enseño programación y desarrollo de software",
    description="Hola, mi nombre es Brais Moure. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.",
    image="avatar.jpg"
)

app.compile()