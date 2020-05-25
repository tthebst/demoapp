from wavefront_pyformance import tagged_registry
from wavefront_pyformance import wavefront_reporter
from wavefront_pyformance import delta
import pyformance
reg = tagged_registry.TaggedRegistry()
c1 = reg.counter("numbers")
c1.inc()

server = "https://vmware.wavefront.com"
token = "dd7a3756-8a43-4c88-a604-6d65d56bf69a"
reg = tagged_registry.TaggedRegistry()
d_0 = delta.delta_counter(reg, 'machineLearningDemoRequests')
d_0.inc(1)

wf_proxy_reporter = wavefront_reporter.WavefrontDirectReporter(
    server=server, token=token, registry=reg,
    source='demoapp-webapp-machinelearning',
    prefix='timDemoappMetrics.machinelearning.',
    reporting_interval=10)
wf_proxy_reporter.report_now()
