<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/resume">
<html>
  <head>
    <title>Part 1: Seyed Sajjad Daneshmand's Resume</title>
    <link rel="stylesheet" href="/shared/style.css"/>
  </head>
  <body>
    <main>
      <section>
        <div class="body">
          <div class="title">
            <h1>Personal Infromation</h1>
          </div>
          <div class="personal">
            <xsl:for-each select="personal">
              <h3><xsl:value-of select="name"/></h3>
              <p><xsl:value-of select="address"/></p>
              <a href="https://github.com/saji2000">github</a>
              <button><a href="mailto:seyedsaj@ualberta.ca">Email Contact</a></button>  
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
        </div>
      </section>
    </main>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>