# coding=utf-8
# *** WARNING: this file was generated by test. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from . import _utilities
import typing
# Export this package's modules as members:
from .provider import *
from .resource import *
from ._inputs import *
from . import outputs
_utilities.register(
    resource_modules="""
[
 {
  "pkg": "mypkg",
  "mod": "",
  "fqn": "pulumi_mypkg",
  "classes": {
   "mypkg::Resource": "Resource"
  }
 }
]
""",
    resource_packages="""
[
 {
  "pkg": "mypkg",
  "token": "pulumi:providers:mypkg",
  "fqn": "pulumi_mypkg",
  "class": "Provider"
 }
]
"""
)
