<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/resume">
        <html>
            <head>
                <title>Part 1: Seyed Sajjad Daneshmand's Resume</title>
                <link rel="stylesheet" href="../shared/css/style.css" />
            </head>
            <body>
                <main>
                    <section>
                        <div class="body">
                            <div class="title">
                                <h2>Personal Infromation</h2>
                            </div>
                            <div class="personal">
                                <xsl:for-each select="personal">
                                    <h3>
                                        <xsl:value-of select="name" />
                                    </h3>
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
                                    <p>
                                        <xsl:value-of select="description" />
                                    </p>
                                </xsl:for-each>
                            </div>
                            <div class="title">
                                <h3>Education</h3>
                            </div>
                            <div class="description">
                                <xsl:for-each select="education">
                                    <p>
                                        <xsl:value-of select="school" />
                                    </p>
                                </xsl:for-each>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>