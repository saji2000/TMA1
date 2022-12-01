<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/resume">
        <html>
            <head>
                <title>Part 1: Seyed Sajjad Daneshmand's Resume</title>
                <link rel="stylesheet" href="../shared/css/style.css" />
            </head>
            <header>
                <div>
                    <h1>Menu</h1>
                  <nav>
                    <ul>
                      <li><a href="../tma.htm">Home</a></li>
                      <li><a href="resume.xml">Part 1</a></li>
                      <li><a href="../part2/part2.html">Part 2</a></li>
                      <li><a href="../part3/part3.html">Part 3</a></li>
                      <li><a href="../part4/part4.html">Part 4</a></li>
                    </ul>
                  </nav>
                </div>
            </header>
            <body>
                <main>
                    <section>
                        <div class="body">
                            <div class="title">
                                <h3>Personal Infromation</h3>
                            </div>
                            <div class="personal">
                                <xsl:for-each select="personal">
                                    <h4>
                                        <xsl:value-of select="name" />
                                    </h4>
                                    <span>
                                        <xsl:value-of select="address" />
                                    </span>
                                    <span>&#160;</span>
                                    <a href="mailto:seyedsaj@ualberta.ca">
                                        <img src="../shared/images/email.png" alt="Email" class="email"></img>
                                    </a>
                                    <a href="https://github.com/saji2000">
                                        <img src="../shared/images/github.png" alt="GitHub" class="github"></img>
                                    </a>
                                    <a href="https://www.linkedin.com/in/seyed-sajjad-daneshmand/">
                                        <img src="../shared/images/linkedin.png" alt="Linkedin" class="linkedin"></img>
                                    </a>
                                </xsl:for-each>
                            </div>
                            <div class="title">
                                <h3>Summary</h3>
                            </div>
                            <div class="description">
                                <xsl:for-each select="personal">
                                    <p><xsl:value-of select="description"/></p>
                                </xsl:for-each>
                            </div>
                            <div class="title">
                                <h3>Education</h3>
                            </div>
                            <div class="description">
                                <xsl:for-each select="education">
                                    <xsl:for-each select="school">
                                        <p><xsl:value-of select="name"/>, <xsl:value-of select="address"/></p>
                                        <p><xsl:value-of select="degree"/>, <xsl:value-of select="date"/></p>
                                    </xsl:for-each>
                                </xsl:for-each>
                            </div>
                            <div class="title">
                                <h3>Work Experience</h3>
                            </div>
                            <div class="description">
                                <xsl:for-each select="experience">
                                    <xsl:for-each select="work">
                                        <p><h4><xsl:value-of select="organization"/></h4> <xsl:value-of select="title"/>, <xsl:value-of select="date"/></p>
                                        <p><xsl:value-of select="description"/></p>
                                    </xsl:for-each>
                                </xsl:for-each>
                            </div>
                            <div class="title">
                                <h3>Skills</h3>
                            </div>
                            <div class="description">
                                <xsl:for-each select="skills">
                                    <p>Expert: <xsl:value-of select="expert"/></p>
                                    <p>Intermediate: <xsl:value-of select="intermediate"/></p>
                                    <p>Software Engineering: <xsl:value-of select="software_engineering"/></p>
                                    <p>Tools: <xsl:value-of select="tools"/></p>
                                </xsl:for-each>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>