import reflex as rx
import webconreflex.styles.styles as styles
from webconreflex.styles.styles import Size
from webconreflex.styles.colors import Color

def link_button(title: str, body: str, image: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src=image,
                    width=Size.LARGE.value,
                    height=Size.LARGE.value,
                    margin=Size.MEDIUM.value,
                    alt=title
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body,  style=styles.button_body_style),
                    align_items="start",
                    spacing=Size.SMALL.value,
                    padding_x=Size.SMALL.value,
                    padding_rigth=Size.SMALL.value
                ),
                width="100%"
            )
        ),
        href=url,
        is_external=True,
        width="100%"
    )