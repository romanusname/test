import part from "@part";

export default function getVars(event,i) {
        if(!event.vars[i].duration) event.vars[i].duration = 0.5
      //  event.vars[i].duration = 0.5
        event.vars[i].delay = 0
     //   event.vars[i] = part.styleCompiler(event.vars[i],'vars')
            for (let q = 0;q<i;q++){
                event.vars[i].delay+=event.vars[q].duration
            }

        return event.vars[i]
}