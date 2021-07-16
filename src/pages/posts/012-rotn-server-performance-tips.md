---
title: 'ROTN Server Performance Tips (2.77.5)'
date: 2021-07-16
author: 'fergenbergel'
type: 'post'
tags: 
 - post
 - minecraft
 - rotn
---

Below I will outline helpful ways in which I was able to reduce lag on my ROTN 2.77.5 server.

## 1: Automatic Restarts.

Automatic Restarts are a must. Once your players reach mid-game your server *will* begin to crash. I found a two hour interval to work well for my server and players but you may have to play with it to find a good interval for your server. If you implement this yourself in linux with systemd or cron don't forget about a warning, it can be pretty jarring to suddenly have the server turn off when the zombies just dug their way into your impenetrable base.

## 2: Clear Mobs.

My server utilizes [Sponge](https://www.spongepowered.org/ "Spongeforge") in order to support plugins. Utilizing Sponge I am able to use the plugin [CatClearLag](https://www.curseforge.com/minecraft/mc-mods/clearlag/files "CatClearLag") in order to clear extra items and extra hostile mobs. ROTN often has lag spikes during invasions thanks to the ridiculous amount of mobs all trying to path and destroy your house, some of these will be cleared by CatClearLag, freeing up some server resources and reducing lag. Here is a link to the documentation: [CatClearLag Documentation](https://github.com/Time6628/CatClearLag/blob/master/docs/plugin.md "Github CatClearLag Documentation"). Again, you will have to play with the configs to find a timing and a threshold that works well for your server. NB: I was using version CatClearLag 0.9.3, newer versions may have different options.

## 3: Disallow Nether Cities.

Nether Cities cause massive lag. We think this is because they span a great many chunks when generating but haven't figured out why the lag sticks around until the next restart once they finish generating. Regardless, this little bug makes it nearly impossible to explore the nether lag-free without disabling them spawning. The config for this can be found in betternether.cfg. Under the "cities" section change CityEnabled=true to CityEnabled=false. You may want to delete the nether(-1) from your world folder in order for it to generate fresh next time you head there.

Hopefully these tips will help in making your server run much better than before, head on over to our discord or message me personally with your outcomes or additional tips for making 2.77.5 run buttery smooth!