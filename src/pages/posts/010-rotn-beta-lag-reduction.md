---
title: 'RoTN Beta Lag Reduction Tweaks'
date: 2021-06-16
author: 'fergenbergel'
type: 'post'
tags: 
 - post
 - minecraft
 - rotnbeta
---

I would like to thank Kale_Thyself for their work in reducing lag on beta servers. They supplied us with a list of tweaks with the goal of reducing lag. Here are the tweaks for posterity:

1. In primitivemobs/primitivemods.cfg on line 35 modify "Enable Goblin"=true to false. 
2. In betternether.cfg on line 424 modify CityEnabled=true to false. 
3. In nyx.cfg on line 250 modify meteorChanceAfterGateNight=0.0007 to 0.00007. 
4. In nyx.cfg on line 271 change meteorKillUnloaded=false to true. 
5. In onslaught/onslaught.cfg on line 95 modify MAX\_CONCURRENT\_INVASIONS=5 to 2. 

Please note these tips are specifically relating to Rebirth of the Night modpack version 3.0 Beta 5 and may not be applicable in subsequent versions of the modpack.