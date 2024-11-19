<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ZAP by Checkmarx Scanning Report</title>
<link
	href="Registration_page_first_test/normalize/normalize.css" rel="stylesheet">
<link
	href="Registration_page_first_test/themes/original/main.css" rel="stylesheet">
<link
	href="Registration_page_first_test/themes/original/colors.css" rel="stylesheet">
</head>
<body>
	<header>
		<h1>ZAP by Checkmarx Scanning Report</h1>
		<p>
			<span>Generated with</span> <a href="https://zaproxy.org"><img
				src="Registration_page_first_test/zap32x32.png" alt="The ZAP logo" class="zap-logo">ZAP</a>
			<span>on mar. 19 nov. 2024, at 18:17:53</span>
		</p>
		<p>ZAP Version: 2.15.0</p>
		<p>
			ZAP by <a href="https://checkmarx.com/">Checkmarx</a>
		</p>
	</header>

	<main>

		<section id="contents" class="contents">
			<h2>Contents</h2>
			<nav>
				<ol>
					<li><a
						href="#about-this-report">About this report</a>
						<ol>
							
							<li><a
								href="#report-parameters">Report parameters</a></li>
						</ol></li>
					<data-th-block>
					<li><a
						href="#summaries">Summaries</a>
						<ol>
							<li><a
								href="#risk-confidence-counts">Alert counts by risk and confidence</a></li>
							<li><a
								href="#site-risk-counts">Alert counts by site and risk</a></li>
							<li><a
								href="#alert-type-counts">Alert counts by alert type</a></li>
						</ol></li>
					<li><a
						href="#alerts">Alerts</a>
						<ol>
							
							 
							
							
							
							
							<li><a
								href="#alerts--risk-2-confidence-3"><span>Risk</span>=<span
									class="risk-level">Moyen</span>, <span>Confidence</span>=<span
									class="confidence-level">Haut</span> <span>(1)</span></a></li>
							
							<li><a
								href="#alerts--risk-2-confidence-2"><span>Risk</span>=<span
									class="risk-level">Moyen</span>, <span>Confidence</span>=<span
									class="confidence-level">Moyen</span> <span>(1)</span></a></li>
							
							<li><a
								href="#alerts--risk-2-confidence-1"><span>Risk</span>=<span
									class="risk-level">Moyen</span>, <span>Confidence</span>=<span
									class="confidence-level">Faible</span> <span>(1)</span></a></li>
							  
							
							
							
							
							
							
							<li><a
								href="#alerts--risk-1-confidence-2"><span>Risk</span>=<span
									class="risk-level">Faible</span>, <span>Confidence</span>=<span
									class="confidence-level">Moyen</span> <span>(1)</span></a></li>
							
							
							  
							
							
							
							
							
							
							<li><a
								href="#alerts--risk-0-confidence-2"><span>Risk</span>=<span
									class="risk-level">Pour information</span>, <span>Confidence</span>=<span
									class="confidence-level">Moyen</span> <span>(1)</span></a></li>
							
							
							  
						</ol></li>
					<li><a
						href="#appendix">Appendix</a>
						<ol>
							<li><a
								href="#alert-types">Alert types</a></li>
						</ol></li>
					</data-th-block>
				</ol>
			</nav>
		</section>

		<section
			id="about-this-report" class="about-this-report">
			<h2>About this report</h2>

			

			<section
				id="report-parameters">
				<h3>Report parameters</h3>
				<div class="report-parameters--container">
					<h4>Contexts</h4>
					
					
					<p>No contexts were selected, so all contexts were included by default.</p>
					  

					<h4>Sites</h4>
					
					<p>The following sites were included:</p>
					<ul class="sites-list">
						<li><span class="site">http://localhost:8000</span></li>
					</ul>
					
					<p>(If no sites were selected, all sites were included by default.)</p>
					<p>An included site must also be within one of the included contexts for its data to be included in the report.</p>

					<h4>Risk levels</h4>
					<p>
						<span>Included</span>:
						 
						<span class="included-risk-codes"><span class="risk-level">Haut</span>, <span class="risk-level">Moyen</span>, <span class="risk-level">Faible</span>, <span class="risk-level">Pour information</span></span>
					</p>
					<p>
						<span>Excluded</span>:
						 <span>None</span>
						
					</p>

					<h4>Confidence levels</h4>
					<p>
						<span>Included</span>:
						
						
						<span class="included-confidence-codes"><span class="confidence-level">User Confirmed</span>, <span class="confidence-level">Haut</span>, <span class="confidence-level">Moyen</span>, <span class="confidence-level">Faible</span></span>
					</p>
					<p>
						<span>Excluded</span>:
						
						
						<span class="included-confidence-codes"> <span class="confidence-level">User Confirmed</span>, <span class="confidence-level">Haut</span>, <span class="confidence-level">Moyen</span>, <span class="confidence-level">Faible</span>, <span class="confidence-level">Faux positif</span></span>
					</p>
				</div>
			</section>
		</section>

		
		<section>
			
		</section>
		
		<section id="summaries" class="summaries">
			<h2>Summaries</h2>

			<section
				id="risk-confidence-counts">
				<h3>Alert counts by risk and confidence</h3>
				<table class="risk-confidence-counts-table">
					<caption>
						<p>This table shows the number of alerts for each level of risk and confidence included in the report.</p>
						<p>(The percentages in brackets represent the count as a percentage of the total number of alerts included in the report, rounded to one decimal place.)</p>
					</caption>
					<colgroup>
						<col>
						<col>
					</colgroup>
					<colgroup>
						<col
							style="width: 14.0%"><col
							style="width: 14.0%"><col
							style="width: 14.0%"><col
							style="width: 14.0%">
						<col style="width: 14.0%">
					</colgroup>
					<thead>
						<tr>
							<td colspan="2" rowspan="2"></td>
							<th scope="colgroup"
								colspan="5">Confidence</th>
						</tr>
						<tr>
							<th scope="col">User Confirmed</th>
							<th scope="col">Haut</th>
							<th scope="col">Moyen</th>
							<th scope="col">Faible</th>
							<th scope="col">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="rowgroup"
								rowspan="5">Risk</th>
							<th scope="row">Haut</th>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>0</span><br> <span class="additional-info-percentages">(0,0 %)</span></td>
						</tr>
						<tr>
							
							<th scope="row">Moyen</th>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>3</span><br> <span class="additional-info-percentages">(60,0 %)</span></td>
						</tr>
						<tr>
							
							<th scope="row">Faible</th>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>1</span><br> <span class="additional-info-percentages">(20,0 %)</span></td>
						</tr>
						<tr>
							
							<th scope="row">Pour information</th>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>1</span><br> <span class="additional-info-percentages">(20,0 %)</span></td>
						</tr>
						<tr>
							<th scope="row">Total</th>
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>3</span><br> <span
								class="additional-info-percentages">(60,0 %)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
							<td><span>5</span><br> <span
								class="additional-info-percentages">(100%)</span></td>
						</tr>
					</tbody>
				</table>
			</section>

			<section
				id="site-risk-counts">
				<h3>Alert counts by site and risk</h3>
				<table class="site-risk-counts-table">
					<caption>
						<p>This table shows, for each site for which one or more alerts were raised, the number of alerts raised at each risk level.</p>
						<p>Alerts with a confidence level of &quot;False Positive&quot; have been excluded from these counts.</p>
						<p>(The numbers in brackets are the number of alerts raised for the site at or above that risk level.)</p>
					</caption>
					<colgroup>
						<col>
						<col>
					</colgroup>
					<colgroup>
						<col
							style="width: 16.25%"><col
							style="width: 16.25%"><col
							style="width: 16.25%"><col
							style="width: 16.25%">
					</colgroup>
					<thead>
						<tr>
							<td colspan="2" rowspan="2"></td>
							<th scope="colgroup" colspan="4">Risk</th>
						</tr>
						<tr>
							<th scope="col">
								<span>Haut</span><br>  <span
									class="additional-info-percentages">(= Haut)</span>  
							</th>
							<th scope="col">
								<span>Moyen</span><br>   <span
									class="additional-info-percentages">(&gt;= Moyen)</span> 
							</th>
							<th scope="col">
								<span>Faible</span><br>   <span
									class="additional-info-percentages">(&gt;= Faible)</span> 
							</th>
							<th scope="col">
								<span>Pour information</span><br>   <span
									class="additional-info-percentages">(&gt;= Pour information)</span> 
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="rowgroup"
								rowspan="1">Site</th>
							<th scope="row">http://localhost:8000</th>
							
							<td><span>0</span><br> <span
								class="additional-info-percentages">(0)</span></td>
							<td><span>3</span><br> <span
								class="additional-info-percentages">(3)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(4)</span></td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(5)</span></td>
							
						</tr>
					</tbody>
				</table>
			</section>

			<section
				id="alert-type-counts">
				<h3>Alert counts by alert type</h3>
				<table class="alert-type-counts-table">
					<caption>
						<p>This table shows the number of alerts of each alert type, together with the alert type&#39;s risk level.</p>
						<p>(The percentages in brackets represent each count as a percentage, rounded to one decimal place, of the total number of alerts included in this report.)</p>
					</caption>
					<thead>
						<tr>
							<th scope="col">Alert type</th>
							<th scope="col">Risk</th>
							<th scope="col">Count</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row"><a
								href="#alert-type-0">Absence de Jetons Anti-CSRF</a></th>
							<td class="risk-level">Moyen</td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
						</tr>
						<tr>
							<th scope="row"><a
								href="#alert-type-1">Content Security Policy (CSP) Header Not Set</a></th>
							<td class="risk-level">Moyen</td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
						</tr>
						<tr>
							<th scope="row"><a
								href="#alert-type-2">Missing Anti-clickjacking Header</a></th>
							<td class="risk-level">Moyen</td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
						</tr>
						<tr>
							<th scope="row"><a
								href="#alert-type-3">X-Content-Type-Options Header Missing</a></th>
							<td class="risk-level">Faible</td>
							<td><span>1</span><br> <span
								class="additional-info-percentages">(20,0 %)</span></td>
						</tr>
						<tr>
							<th scope="row"><a
								href="#alert-type-4">User Agent Fuzzer</a></th>
							<td class="risk-level">Pour information</td>
							<td><span>12</span><br> <span
								class="additional-info-percentages">(240,0 %)</span></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th scope="row">Total</th>
							<td></td>
							<td>5</td>
						</tr>
					</tfoot>
				</table>
			</section>
		</section>

		<section id="alerts" class="alerts">
			<h2>Alerts</h2>
			<ol>
				
				 
				 
				
				
				<li id="alerts--risk-2-confidence-3">
					<h3>
						<span>Risk</span>=<span
							class="risk-level">Moyen</span>, <span>Confidence</span>=<span
							class="confidence-level">Haut</span> <span>(1)</span>
					</h3>
					<ol>
						
						<li class="alerts--site-li">
							<h4>
								<span class="site">http://localhost:8000</span> <span>(1)</span>
							</h4>
							<ol>
								
								<li>
									<h5>
										<a
											href="#alert-type-1">Content Security Policy (CSP) Header Not Set</a> <span>(1)</span>
									</h5>
									<ol>
										<li><details>
												<summary>
													<span class="request-method-n-url">GET http://localhost:8000/register</span>
												</summary>
												
<table class="alerts-table">
	<tr>
		<th scope="row">Alert tags</th>
		<td>
			<ul class="alert-tags-list">
				<li>
					<span><a href="https://cwe.mitre.org/data/definitions/693.html">CWE-693</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/Top10/A05_2021-Security_Misconfiguration/">OWASP_2021_A05</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration.html">OWASP_2017_A06</a></span> 
				</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th scope="row">Alert description</th>
		<td> 
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
 </td>
	</tr>
	
	<tr>
		<th scope="row">Request</th>
		<td><details open="open">
				<summary>Request line and header section (206 bytes)</summary>
				
				<pre><code>GET http://localhost:8000/register HTTP/1.1
host: localhost:8000
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0
pragma: no-cache
cache-control: no-cache

</code></pre>
				
				
			</details> <details class="request-body" open="open">
				<summary>Request body (0 bytes)</summary>
				
				<pre><code></code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Response</th>
		<td><details open="open">
				<summary>Status line and header section (141 bytes)</summary>
				
				<pre><code>HTTP/1.1 200 OK
content-type: text/html; charset=UTF-8
vary: Accept-Encoding
content-length: 1093
date: Tue, 19 Nov 2024 15:53:15 GMT

</code></pre>
				
				
			</details> <details class="response-body" open="open">
				<summary>Response body (1093 bytes)</summary>
				
				<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;title&gt;
            User Registration
        &lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;
            Register
        &lt;/h1&gt;
        &lt;form action=&quot;/register&quot; method=&quot;POST&quot;&gt;
            &lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;username&quot; name=&quot;username&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;password&quot;&gt;Password:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;password&quot; name=&quot;password&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;birthdate&quot;&gt;Birthdate:&lt;/label&gt;
            &lt;input type=&quot;date&quot; id=&quot;birthdate&quot; name=&quot;birthdate&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;role&quot;&gt;Role:&lt;/label&gt;
            &lt;select id=&quot;role&quot; name=&quot;role&quot;&gt;
                &lt;option value=&quot;reserver&quot;&gt;Reserver&lt;/option&gt;
                &lt;option value=&quot;administrator&quot;&gt;Administrator&lt;/option&gt;
            &lt;/select&gt;&lt;br&gt;&lt;br&gt;
            &lt;button type=&quot;submit&quot;&gt;Register&lt;/button&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
				
				
			</details></td>
	</tr>
	
	
	
	<tr>
		<th scope="row">Solution</th>
		<td> 
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.</p>
 </td>
	</tr>
</table>

											</details></li>
									</ol>
								</li>
								
							</ol>
						</li>
						
					</ol>
				</li>
				
				<li id="alerts--risk-2-confidence-2">
					<h3>
						<span>Risk</span>=<span
							class="risk-level">Moyen</span>, <span>Confidence</span>=<span
							class="confidence-level">Moyen</span> <span>(1)</span>
					</h3>
					<ol>
						
						<li class="alerts--site-li">
							<h4>
								<span class="site">http://localhost:8000</span> <span>(1)</span>
							</h4>
							<ol>
								
								<li>
									<h5>
										<a
											href="#alert-type-2">Missing Anti-clickjacking Header</a> <span>(1)</span>
									</h5>
									<ol>
										<li><details>
												<summary>
													<span class="request-method-n-url">GET http://localhost:8000/register</span>
												</summary>
												
<table class="alerts-table">
	<tr>
		<th scope="row">Alert tags</th>
		<td>
			<ul class="alert-tags-list">
				<li>
					<span><a href="https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/11-Client-side_Testing/09-Testing_for_Clickjacking">WSTG-v42-CLNT-09</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/Top10/A05_2021-Security_Misconfiguration/">OWASP_2021_A05</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration.html">OWASP_2017_A06</a></span> 
				</li>
				<li>
					<span><a href="https://cwe.mitre.org/data/definitions/1021.html">CWE-1021</a></span> 
				</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th scope="row">Alert description</th>
		<td> 
<p>The response does not include either Content-Security-Policy with &#39;frame-ancestors&#39; directive or X-Frame-Options to protect against &#39;ClickJacking&#39; attacks.</p>
 </td>
	</tr>
	
	<tr>
		<th scope="row">Request</th>
		<td><details open="open">
				<summary>Request line and header section (206 bytes)</summary>
				
				<pre><code>GET http://localhost:8000/register HTTP/1.1
host: localhost:8000
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0
pragma: no-cache
cache-control: no-cache

</code></pre>
				
				
			</details> <details class="request-body" open="open">
				<summary>Request body (0 bytes)</summary>
				
				<pre><code></code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Response</th>
		<td><details open="open">
				<summary>Status line and header section (141 bytes)</summary>
				
				<pre><code>HTTP/1.1 200 OK
content-type: text/html; charset=UTF-8
vary: Accept-Encoding
content-length: 1093
date: Tue, 19 Nov 2024 15:53:15 GMT

</code></pre>
				
				
			</details> <details class="response-body" open="open">
				<summary>Response body (1093 bytes)</summary>
				
				<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;title&gt;
            User Registration
        &lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;
            Register
        &lt;/h1&gt;
        &lt;form action=&quot;/register&quot; method=&quot;POST&quot;&gt;
            &lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;username&quot; name=&quot;username&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;password&quot;&gt;Password:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;password&quot; name=&quot;password&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;birthdate&quot;&gt;Birthdate:&lt;/label&gt;
            &lt;input type=&quot;date&quot; id=&quot;birthdate&quot; name=&quot;birthdate&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;role&quot;&gt;Role:&lt;/label&gt;
            &lt;select id=&quot;role&quot; name=&quot;role&quot;&gt;
                &lt;option value=&quot;reserver&quot;&gt;Reserver&lt;/option&gt;
                &lt;option value=&quot;administrator&quot;&gt;Administrator&lt;/option&gt;
            &lt;/select&gt;&lt;br&gt;&lt;br&gt;
            &lt;button type=&quot;submit&quot;&gt;Register&lt;/button&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Parameter</th>
		<td><pre><code>x-frame-options</code></pre></td>
	</tr>
	
	
	<tr>
		<th scope="row">Solution</th>
		<td> 
<p>Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app.</p>

<p>If you expect the page to be framed only by pages on your server (e.g. it&#39;s part of a FRAMESET) then you&#39;ll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy&#39;s &quot;frame-ancestors&quot; directive.</p>
 </td>
	</tr>
</table>

											</details></li>
									</ol>
								</li>
								
							</ol>
						</li>
						
					</ol>
				</li>
				
				<li id="alerts--risk-2-confidence-1">
					<h3>
						<span>Risk</span>=<span
							class="risk-level">Moyen</span>, <span>Confidence</span>=<span
							class="confidence-level">Faible</span> <span>(1)</span>
					</h3>
					<ol>
						
						<li class="alerts--site-li">
							<h4>
								<span class="site">http://localhost:8000</span> <span>(1)</span>
							</h4>
							<ol>
								
								<li>
									<h5>
										<a
											href="#alert-type-0">Absence de Jetons Anti-CSRF</a> <span>(1)</span>
									</h5>
									<ol>
										<li><details>
												<summary>
													<span class="request-method-n-url">GET http://localhost:8000/register</span>
												</summary>
												
<table class="alerts-table">
	<tr>
		<th scope="row">Alert tags</th>
		<td>
			<ul class="alert-tags-list">
				<li>
					<span><a href="https://owasp.org/Top10/A01_2021-Broken_Access_Control/">OWASP_2021_A01</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/05-Testing_for_Cross_Site_Request_Forgery">WSTG-v42-SESS-05</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control.html">OWASP_2017_A05</a></span> 
				</li>
				<li>
					<span><a href="https://cwe.mitre.org/data/definitions/352.html">CWE-352</a></span> 
				</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th scope="row">Alert description</th>
		<td> 
<p>Aucun jetons Anti-CSRF n&#39;ont été trouvés dans un formulaire HTML.</p>

<p>La contrefaçon de requête intersites (Cross Site Request Forgery - CSRF) est une attaque qui consiste à forcer une victime à envoyer une requête HTTP vers une destination cible, sans qu&#39;elle n&#39;en aie ni connaissance ni intention, afin d&#39;effectuer une action en se faisant passer pour la victime. La cause originelle est que les fonctionnalités de l&#39;application sont appelées à l&#39;aide d&#39;URL ou d&#39;actions de formulaires prévisibles et reproductibles. La nature de l&#39;attaque est que le CSRF exploite la confiance qu&#39;un site internet accorde à un utilisateur. En revanche, le cross-site scripting (XSS) exploite la confiance que l&#39;utilisateur porte à un site internet. Comme XSS, les attaques CSRF ne sont pas nécessairement multi-sites, mais elles peuvent l&#39;être. La contrefaçon de requête intersite est également connue sous les noms CSRF, XSRF, attaque en un clic (one-click attack), session riding, confused deputy et sea surf.</p>

<p>Les attaques CSRF sont efficaces dans de nombreuses situations, notamment:</p>

<p>* quand la victime a une session active sur le site cible.</p>

<p>    * quand la victime est authentifiée via HTTP auth sur le site cible.</p>

<p>    * quand la victime est sur le même réseau local que le site cible.</p>

<p>CSRF a d&#39;abord été utilisée pour effectuer une action contre un site cible en utilisant les privilèges de la victime, mais des techniques récentes permettent d&#39;avoir accès à des renseignements en accédant à la réponse. Le risque de divulgation d&#39;informations est considérablement augmenté lorsque le site cible est vulnérable aux XSS, parce que XSS peut être utilisé comme une plateforme pour CSRF, permettant à l&#39;attaque d&#39;opérer dans les limites de la politique de même origine.</p>
 </td>
	</tr>
	<tr>
		<th scope="row">Other info</th>
		<td> 
<p>Aucun jetons Anti-CSRF connus [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] n&#39;a été trouvé dans le formulaire HTML suivant: [Form 1: &quot;birthdate&quot; &quot;password&quot; &quot;username&quot; ].  </p>
 </td>
	</tr>
	<tr>
		<th scope="row">Request</th>
		<td><details open="open">
				<summary>Request line and header section (206 bytes)</summary>
				
				<pre><code>GET http://localhost:8000/register HTTP/1.1
host: localhost:8000
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0
pragma: no-cache
cache-control: no-cache

</code></pre>
				
				
			</details> <details class="request-body" open="open">
				<summary>Request body (0 bytes)</summary>
				
				<pre><code></code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Response</th>
		<td><details open="open">
				<summary>Status line and header section (141 bytes)</summary>
				
				<pre><code>HTTP/1.1 200 OK
content-type: text/html; charset=UTF-8
vary: Accept-Encoding
content-length: 1093
date: Tue, 19 Nov 2024 15:53:15 GMT

</code></pre>
				
				
			</details> <details class="response-body" open="open">
				<summary>Response body (1093 bytes)</summary>
				
				<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;title&gt;
            User Registration
        &lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;
            Register
        &lt;/h1&gt;
        &lt;form action=&quot;/register&quot; method=&quot;POST&quot;&gt;
            &lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;username&quot; name=&quot;username&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;password&quot;&gt;Password:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;password&quot; name=&quot;password&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;birthdate&quot;&gt;Birthdate:&lt;/label&gt;
            &lt;input type=&quot;date&quot; id=&quot;birthdate&quot; name=&quot;birthdate&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;role&quot;&gt;Role:&lt;/label&gt;
            &lt;select id=&quot;role&quot; name=&quot;role&quot;&gt;
                &lt;option value=&quot;reserver&quot;&gt;Reserver&lt;/option&gt;
                &lt;option value=&quot;administrator&quot;&gt;Administrator&lt;/option&gt;
            &lt;/select&gt;&lt;br&gt;&lt;br&gt;
            &lt;button type=&quot;submit&quot;&gt;Register&lt;/button&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
				
				
			</details></td>
	</tr>
	
	
	<tr>
		<th scope="row">Evidence</th>
		<td><pre><code>&lt;form action=&quot;/register&quot; method=&quot;POST&quot;&gt;</code></pre></td>
	</tr>
	<tr>
		<th scope="row">Solution</th>
		<td> 
<p>Phase: Architecture et Design</p>

<p>Utilisez une librairie ou un framework approuvé qui ne permet pas cette vulnérabilité, ou qui contient des fonctionnalités permettant d&#39;éviter plus facilement cette vulnérabilité.</p>

<p>Utilisez  par exemple des librairies anti-CSRF telles que CSRFGuard de l&#39;OWASP.</p>

<p>Phase: Implémentation</p>

<p>Assurez-vous que votre application soit exempte de problèmes de cross-site scripting, parce que la plupart des défenses contre le CSRF peuvent être contournées en utilisant des scripts contrôlés par le pirate.</p>

<p>Phase: Architecture et Design</p>

<p>Générez une valeur à usage unique pour chaque formulaire, placez-la dans le formulaire et vérifiez-la à la réception du formulaire. Assurez-vous que cette valeur unique ne soit pas prévisible (CWE-330).</p>

<p>Notez que ceci peut aussi être contourné en utilisant XSS.</p>

<p>Identifiez les opérations particulièrement dangereuses. Quand l&#39;utilisateur exécute une opération dangereuse, envoyez une requête de confirmation distincte pour vérifier que l&#39;utilisateur veut effectivement effectuer cette opération.</p>

<p>Notez que ceci peut aussi être contourné en utilisant XSS.</p>

<p>Utilisez la librairie de gestion de session ESAPI.</p>

<p>Cette librairie comprend un composant pour le contrôle de CSRF.</p>

<p>N&#39;utilisez pas la méthode GET pour les requêtes entraînant un changement d&#39;état.</p>

<p>Phase: Implémentation</p>

<p>Vérifiez l&#39;en-tête HTTP Referer pour voir si la requête provient d&#39;une page attendue. Ceci pourrait toutefois restreindre la fonctionnalité de l&#39;application, car les utilisateurs ou les serveurs proxy pourraient avoir désactivé le renvoi du HTTP Referer pour des raisons de confidentialité.</p>
 </td>
	</tr>
</table>

											</details></li>
									</ol>
								</li>
								
							</ol>
						</li>
						
					</ol>
				</li>
				  
				 
				
				
				
				
				<li id="alerts--risk-1-confidence-2">
					<h3>
						<span>Risk</span>=<span
							class="risk-level">Faible</span>, <span>Confidence</span>=<span
							class="confidence-level">Moyen</span> <span>(1)</span>
					</h3>
					<ol>
						
						<li class="alerts--site-li">
							<h4>
								<span class="site">http://localhost:8000</span> <span>(1)</span>
							</h4>
							<ol>
								
								<li>
									<h5>
										<a
											href="#alert-type-3">X-Content-Type-Options Header Missing</a> <span>(1)</span>
									</h5>
									<ol>
										<li><details>
												<summary>
													<span class="request-method-n-url">GET http://localhost:8000/register</span>
												</summary>
												
<table class="alerts-table">
	<tr>
		<th scope="row">Alert tags</th>
		<td>
			<ul class="alert-tags-list">
				<li>
					<span><a href="https://cwe.mitre.org/data/definitions/693.html">CWE-693</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/Top10/A05_2021-Security_Misconfiguration/">OWASP_2021_A05</a></span> 
				</li>
				<li>
					<span><a href="https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration.html">OWASP_2017_A06</a></span> 
				</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th scope="row">Alert description</th>
		<td> 
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to &#39;nosniff&#39;. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
 </td>
	</tr>
	<tr>
		<th scope="row">Other info</th>
		<td> 
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p>

<p>At &quot;High&quot; threshold this scan rule will not alert on client or server error responses.</p>
 </td>
	</tr>
	<tr>
		<th scope="row">Request</th>
		<td><details open="open">
				<summary>Request line and header section (206 bytes)</summary>
				
				<pre><code>GET http://localhost:8000/register HTTP/1.1
host: localhost:8000
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0
pragma: no-cache
cache-control: no-cache

</code></pre>
				
				
			</details> <details class="request-body" open="open">
				<summary>Request body (0 bytes)</summary>
				
				<pre><code></code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Response</th>
		<td><details open="open">
				<summary>Status line and header section (141 bytes)</summary>
				
				<pre><code>HTTP/1.1 200 OK
content-type: text/html; charset=UTF-8
vary: Accept-Encoding
content-length: 1093
date: Tue, 19 Nov 2024 15:53:15 GMT

</code></pre>
				
				
			</details> <details class="response-body" open="open">
				<summary>Response body (1093 bytes)</summary>
				
				<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;title&gt;
            User Registration
        &lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;
            Register
        &lt;/h1&gt;
        &lt;form action=&quot;/register&quot; method=&quot;POST&quot;&gt;
            &lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;username&quot; name=&quot;username&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;password&quot;&gt;Password:&lt;/label&gt;
            &lt;input type=&quot;text&quot; id=&quot;password&quot; name=&quot;password&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;birthdate&quot;&gt;Birthdate:&lt;/label&gt;
            &lt;input type=&quot;date&quot; id=&quot;birthdate&quot; name=&quot;birthdate&quot; required&gt;&lt;br&gt;&lt;br&gt;
            &lt;label for=&quot;role&quot;&gt;Role:&lt;/label&gt;
            &lt;select id=&quot;role&quot; name=&quot;role&quot;&gt;
                &lt;option value=&quot;reserver&quot;&gt;Reserver&lt;/option&gt;
                &lt;option value=&quot;administrator&quot;&gt;Administrator&lt;/option&gt;
            &lt;/select&gt;&lt;br&gt;&lt;br&gt;
            &lt;button type=&quot;submit&quot;&gt;Register&lt;/button&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Parameter</th>
		<td><pre><code>x-content-type-options</code></pre></td>
	</tr>
	
	
	<tr>
		<th scope="row">Solution</th>
		<td> 
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to &#39;nosniff&#39; for all web pages.</p>

<p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
 </td>
	</tr>
</table>

											</details></li>
									</ol>
								</li>
								
							</ol>
						</li>
						
					</ol>
				</li>
				
				
				  
				 
				
				
				
				
				<li id="alerts--risk-0-confidence-2">
					<h3>
						<span>Risk</span>=<span
							class="risk-level">Pour information</span>, <span>Confidence</span>=<span
							class="confidence-level">Moyen</span> <span>(1)</span>
					</h3>
					<ol>
						
						<li class="alerts--site-li">
							<h4>
								<span class="site">http://localhost:8000</span> <span>(1)</span>
							</h4>
							<ol>
								
								<li>
									<h5>
										<a
											href="#alert-type-4">User Agent Fuzzer</a> <span>(1)</span>
									</h5>
									<ol>
										<li><details>
												<summary>
													<span class="request-method-n-url">POST http://localhost:8000/register</span>
												</summary>
												
<table class="alerts-table">
	<tr>
		<th scope="row">Alert tags</th>
		<td>
			<ul class="alert-tags-list">
				
			</ul>
		</td>
	</tr>
	<tr>
		<th scope="row">Alert description</th>
		<td> 
<p>Check for differences in response based on fuzzed User Agent (eg. mobile sites, access as a Search Engine Crawler). Compares the response statuscode and the hashcode of the response body with the original response.</p>
 </td>
	</tr>
	
	<tr>
		<th scope="row">Request</th>
		<td><details open="open">
				<summary>Request line and header section (287 bytes)</summary>
				
				<pre><code>POST http://localhost:8000/register HTTP/1.1
host: localhost:8000
user-agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)
pragma: no-cache
cache-control: no-cache
content-type: application/x-www-form-urlencoded
referer: http://localhost:8000/register
content-length: 65

</code></pre>
				
				
			</details> <details class="request-body" open="open">
				<summary>Request body (65 bytes)</summary>
				
				<pre><code>username=ZAP&amp;password=ZAP&amp;birthdate=2024-11-19&amp;role=administrator</code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Response</th>
		<td><details open="open">
				<summary>Status line and header section (159 bytes)</summary>
				
				<pre><code>HTTP/1.1 500 Internal Server Error
content-type: text/plain; charset=UTF-8
vary: Accept-Encoding
content-length: 25
date: Tue, 19 Nov 2024 16:12:00 GMT

</code></pre>
				
				
			</details> <details class="response-body" open="open">
				<summary>Response body (25 bytes)</summary>
				
				<pre><code>Error during registration</code></pre>
				
				
			</details></td>
	</tr>
	<tr>
		<th scope="row">Parameter</th>
		<td><pre><code>Header User-Agent</code></pre></td>
	</tr>
	<tr>
		<th scope="row">Attack</th>
		<td><pre><code>Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)</code></pre></td>
	</tr>
	
	
</table>

											</details></li>
									</ol>
								</li>
								
							</ol>
						</li>
						
					</ol>
				</li>
				
				
				  
			</ol>
		</section>

		<section id="appendix" class="appendix">
			<h2>Appendix</h2>

			<section id="alert-types" class="alert-types">
				<h3>Alert types</h3>
				<p class="alert-types-intro">This section contains additional information on the types of alerts in the report.</p>
				<ol>
					<li
						id="alert-type-0">
						<h4>Absence de Jetons Anti-CSRF</h4>
						<table class="alert-types-table">
							<tr>
								<th scope="row">Source</th>
								<td>
									
									   <span>raised by a passive scanner</span> <span>(<a
										href="https://www.zaproxy.org/docs/alerts/10202/">Absence de Jetons Anti-CSRF</a>)
									</span>   
								</td>
							</tr>
							<tr>
								<th scope="row">CWE ID</th>
								<td><a
									href="https://cwe.mitre.org/data/definitions/352.html">352</a></td>
							</tr>
							<tr>
								<th scope="row">WASC ID</th>
								<td>9</td>
							</tr>
							<tr>
								<th scope="row">Reference</th>
								<td>
									<ol>
										<li><a
											href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html">https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html</a></li>
										<li><a
											href="https://cwe.mitre.org/data/definitions/352.html">https://cwe.mitre.org/data/definitions/352.html</a></li>
									</ol>
								</td>
							</tr>
						</table>
					</li>
					<li
						id="alert-type-1">
						<h4>Content Security Policy (CSP) Header Not Set</h4>
						<table class="alert-types-table">
							<tr>
								<th scope="row">Source</th>
								<td>
									
									   <span>raised by a passive scanner</span> <span>(<a
										href="https://www.zaproxy.org/docs/alerts/10038/">Content Security Policy (CSP) Header Not Set</a>)
									</span>   
								</td>
							</tr>
							<tr>
								<th scope="row">CWE ID</th>
								<td><a
									href="https://cwe.mitre.org/data/definitions/693.html">693</a></td>
							</tr>
							<tr>
								<th scope="row">WASC ID</th>
								<td>15</td>
							</tr>
							<tr>
								<th scope="row">Reference</th>
								<td>
									<ol>
										<li><a
											href="https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy">https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy</a></li>
										<li><a
											href="https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html">https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html</a></li>
										<li><a
											href="https://www.w3.org/TR/CSP/">https://www.w3.org/TR/CSP/</a></li>
										<li><a
											href="https://w3c.github.io/webappsec-csp/">https://w3c.github.io/webappsec-csp/</a></li>
										<li><a
											href="https://web.dev/articles/csp">https://web.dev/articles/csp</a></li>
										<li><a
											href="https://caniuse.com/#feat=contentsecuritypolicy">https://caniuse.com/#feat=contentsecuritypolicy</a></li>
										<li><a
											href="https://content-security-policy.com/">https://content-security-policy.com/</a></li>
									</ol>
								</td>
							</tr>
						</table>
					</li>
					<li
						id="alert-type-2">
						<h4>Missing Anti-clickjacking Header</h4>
						<table class="alert-types-table">
							<tr>
								<th scope="row">Source</th>
								<td>
									
									   <span>raised by a passive scanner</span> <span>(<a
										href="https://www.zaproxy.org/docs/alerts/10020/">Anti-clickjacking Header</a>)
									</span>   
								</td>
							</tr>
							<tr>
								<th scope="row">CWE ID</th>
								<td><a
									href="https://cwe.mitre.org/data/definitions/1021.html">1021</a></td>
							</tr>
							<tr>
								<th scope="row">WASC ID</th>
								<td>15</td>
							</tr>
							<tr>
								<th scope="row">Reference</th>
								<td>
									<ol>
										<li><a
											href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options</a></li>
									</ol>
								</td>
							</tr>
						</table>
					</li>
					<li
						id="alert-type-3">
						<h4>X-Content-Type-Options Header Missing</h4>
						<table class="alert-types-table">
							<tr>
								<th scope="row">Source</th>
								<td>
									
									   <span>raised by a passive scanner</span> <span>(<a
										href="https://www.zaproxy.org/docs/alerts/10021/">X-Content-Type-Options Header Missing</a>)
									</span>   
								</td>
							</tr>
							<tr>
								<th scope="row">CWE ID</th>
								<td><a
									href="https://cwe.mitre.org/data/definitions/693.html">693</a></td>
							</tr>
							<tr>
								<th scope="row">WASC ID</th>
								<td>15</td>
							</tr>
							<tr>
								<th scope="row">Reference</th>
								<td>
									<ol>
										<li><a
											href="https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85)">https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85)</a></li>
										<li><a
											href="https://owasp.org/www-community/Security_Headers">https://owasp.org/www-community/Security_Headers</a></li>
									</ol>
								</td>
							</tr>
						</table>
					</li>
					<li
						id="alert-type-4">
						<h4>User Agent Fuzzer</h4>
						<table class="alert-types-table">
							<tr>
								<th scope="row">Source</th>
								<td>
									
									   <span>raised by an active scanner</span> <span>(<a
										href="https://www.zaproxy.org/docs/alerts/10104/">User Agent Fuzzer</a>)
									</span>   
								</td>
							</tr>
							
							
							<tr>
								<th scope="row">Reference</th>
								<td>
									<ol>
										<li><a
											href="https://owasp.org/wstg">https://owasp.org/wstg</a></li>
									</ol>
								</td>
							</tr>
						</table>
					</li>
				</ol>
			</section>
		</section>
		 
	</main>
</body>
</html>



