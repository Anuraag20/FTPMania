from channels.auth import AuthMiddlewareStack
from channels.routing import URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
import ftp.routing
#The AllowedHostOriginValidator was added later

router = AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            URLRouter(
                ftp.routing.websocket_urlpatterns,
            )
        )
    )
